export declare global {
  interface CtxOptions {
    lineWidth: number;
    lineColor: string;
  }

  interface Move {
    path: [number, number][];
    options: CtxOptions;
  }

  interface ServerToClientEvents {
    user_draw: (move: Move, userId: string) => void;
    user_undo(userId: string): void;
    mouse_moved: (x: number, y: number, socketId: string) => void;
    users_in_room: (socketIds: string[]) => void;
    user_disconnected: (socketId: string) => void;
  }

  interface ClientToServerEvents {
    draw: (moves: Move) => void;
    mouse_move: (x: number, y: number) => void;
    undo: () => void;
  }
}
