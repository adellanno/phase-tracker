const tasks: Task[] = [];

const phases: Phase[] = [];

type Phase = {
  name: string;
  id: number;
  isCompleted: boolean;
  isLocked: boolean;
};

type Task = {
  name: string;
  phaseId: number;
  id: number;
  isCompleted: boolean;
};

export const createTask = (name: string, phaseId: number): Task => {
  const task: Task = {
    id: getTasks().length + 1,
    phaseId,
    name: name,
    isCompleted: false,
  };

  tasks.push(task);
  return task;
};

export const getTasks = (phaseId?: number, taskId?: number): Task[] => {
  if (phaseId) {
    return tasks.filter((task) => task.phaseId === phaseId);
  }
  if (taskId) {
    return tasks.filter((task) => task.id === taskId);
  }

  return tasks;
};

export const updateTask = (
  id: number,
  phaseId: number,
  isCompleted: boolean
): Task => {
  const task: Task = getTasks(undefined, id)[0];

  if (task.id === id && task.phaseId === phaseId) {
    task.isCompleted = isCompleted;
    return task;
  }

  return task;
};

export const createPhase = (name: string): Phase => {
  const phase = {
    id: getPhases().length + 1,
    name: name,
    isCompleted: false,
    isLocked: getPhases().length === 0 ? false : true,
  };
  phases.push(phase);
  return phase;
};

export const getPhases = (phaseId?: number): Phase[] => {
  if (phaseId) {
    return phases.filter((phase) => phase.id === phaseId);
  }

  return phases;
};

export const updatePhase = (
  phaseId: number,
  isCompleted?: boolean,
  isLocked?: boolean
): Phase => {
  const phase: Phase = getPhases(phaseId)[0];

  if (phase) {
    if (isCompleted != undefined) phase.isCompleted = isCompleted;
    if (isLocked != undefined) phase.isLocked = isLocked;
  }

  return phase;
};
