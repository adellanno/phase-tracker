export interface TaskObject {
    name: string;
    phaseId: number;
    id: number;
    isCompleted: boolean
}
  
export interface PhaseObject {
    name: string;
    tasks: TaskObject;
    id: number;
    isLocked: boolean;
    isCompleted: boolean
}