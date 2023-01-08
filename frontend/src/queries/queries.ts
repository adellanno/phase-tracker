import { gql } from "@apollo/client";

export const CREATE_PHASE = gql`
  mutation createPhase($name: String!) {
    createPhase(name: $name) {
      name
    }
  }
`;

export const CREATE_TASK = gql`
  mutation createTask($name: String!, $phaseId: Int!) {
    createTask(name: $name, phaseId: $phaseId) {
      name
      phaseId
    }
  }
`;

export const GET_PHASES = gql`
  query GetPhases {
    phases {
      name
      id
      isCompleted
      isLocked
      tasks {
        name
        id
        phaseId
        isCompleted
      }
    }
  }
`;

export const UPDATE_TASK = gql`
  mutation updateTask($id: Int!, $phaseId: Int!, $isCompleted: Boolean!) {
    updateTask(id: $id, phaseId: $phaseId, isCompleted: $isCompleted) {
      id
      phaseId
      isCompleted
    }
  }
`;

export const UPDATE_PHASE = gql`
  mutation updatePhase($id: Int!, $isCompleted: Boolean, $isLocked: Boolean) {
    updatePhase(id: $id, isCompleted: $isCompleted, isLocked: $isLocked) {
      id
      isCompleted
      isLocked
    }
  }
`;
