import { MockDataType } from "@/mock-comment-data"
export const commentCreator = (id: number, name: string, comment: string, time: string, parentId?: number): MockDataType => {
    return {
        id,
        name,
        comment,
        likeCount: 0,
        time,
        parentId: parentId? parentId : 0
    }
}

export type ActionWithPayload<T, P> = {
    type: T;
    payload: P;
}

export type Action<T> = {
    type: T;
}

export function createAction<T extends string, P>(type: T, payload: P): ActionWithPayload<T, P>

export function createAction<T extends string>(type: T, payload: void): Action<T>

export function createAction<T extends string, P>(type: T, payload: P) {
    return {type, payload}
}