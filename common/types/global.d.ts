//interfaces

export declare global {
  interface CtxOptions {
    lineWidth: number;
    lineColor: string;
  }

  interface Move {
    path: [number, number][];
    options: CtxOptions;
  }

  type Room = { users: Map<string, Move[]>; drawed: Move[] };

  interface ServerToClientEvents {
    room: (room: Room, usersToParse: string) => void;
    created: (roomId: string) => void;
    joined: (roomId: string, failed?: boolean) => void;
    user_draw: (move: Move, userId: string) => void;
    user_undo(userId: string): void;
    mouse_moved: (x: number, y: number, userId: string) => void;
    new_user: (user_Id: string) => void;
    user_disconnected: (userId: string) => void;
  }

  interface ClientToServerEvents {
    draw: (moves: Move) => void;
    mouse_move: (x: number, y: number) => void;
    undo: () => void;
    create_room: () => void;
    join_room: (room: string) => void;
    joined_room: () => void;
    leave_room: () => void;
  }
}
