import {
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
  GraphQLSchema,
  GraphQLNonNull,
} from "graphql";

import {
  createPhase,
  getPhases,
  updatePhase,
  createTask,
  getTasks,
  updateTask,
} from "../services/store/store";

const TaskType = new GraphQLObjectType({
  name: "Task",
  fields: () => ({
    id: { type: GraphQLInt },
    phaseId: { type: GraphQLInt },
    name: { type: GraphQLString },
    isCompleted: { type: GraphQLBoolean },
    isLocked: { type: GraphQLBoolean },
  }),
});

const PhaseType = new GraphQLObjectType({
  name: "Phase",
  fields: () => ({
    id: { type: GraphQLInt },
    name: { type: GraphQLString },
    isCompleted: { type: GraphQLBoolean },
    isLocked: { type: GraphQLBoolean },
    tasks: {
      type: new GraphQLList(TaskType),
      resolve: (phase) => {
        return getTasks(phase.id);
      },
    },
  }),
});

const RootQueryType = new GraphQLObjectType({
  name: "RootQueryType",
  fields: () => ({
    phases: {
      type: new GraphQLList(PhaseType),
      description: "List all phases",
      resolve: () => getPhases(),
    },
    tasks: {
      type: new GraphQLList(TaskType),
      description: "List all tasks",
      resolve: () => getTasks(),
    },
  }),
});

const RootMutationType = new GraphQLObjectType({
  name: "Mutation",
  description: "Root Mutation",
  fields: () => ({
    createPhase: {
      type: PhaseType,
      description: "Create a phase",
      args: {
        name: { type: GraphQLNonNull(GraphQLString) },
      },
      resolve: (parent, args) => {
        return createPhase(args.name);
      },
    },
    updatePhase: {
      type: TaskType,
      description: "Update a phase",
      args: {
        id: { type: GraphQLNonNull(GraphQLInt) },
        isCompleted: { type: GraphQLBoolean },
        isLocked: { type: GraphQLBoolean },
      },
      resolve: (parent, args) => {
        return updatePhase(args.id, args.isCompleted, args.isLocked);
      },
    },
    createTask: {
      type: TaskType,
      description: "Create a task",
      args: {
        phaseId: { type: GraphQLNonNull(GraphQLInt) },
        name: { type: GraphQLNonNull(GraphQLString) },
      },
      resolve: (parent, args) => {
        return createTask(args.name, args.phaseId);
      },
    },
    updateTask: {
      type: TaskType,
      description: "Update a task",
      args: {
        id: { type: GraphQLNonNull(GraphQLInt) },
        phaseId: { type: GraphQLNonNull(GraphQLInt) },
        isCompleted: { type: GraphQLNonNull(GraphQLBoolean) },
      },
      resolve: (parent, args) => {
        return updateTask(args.id, args.phaseId, args.isCompleted);
      },
    },
  }),
});

export default new GraphQLSchema({
  query: RootQueryType,
  mutation: RootMutationType,
});
