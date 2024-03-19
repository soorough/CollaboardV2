//interfaces

export declare global {
  type Shape = "line" | "circle" | "rect";
  interface CtxOptions {
    lineWidth: number;
    lineColor: string;
    erase: boolean;
    shape: Shape;
  }

  interface Move {
    shape: Shape;
    radius: number;
    width: number;
    height: number;
    path: [number, number][];
    options: CtxOptions;
    timestamp: number;
    eraser: boolean;
  }

  interface Message {
    userId: string;
    username: string;
    color: string;
    msg: string;
    id: number;
  }

  type Room = {
    usersMoves: Map<string, Move[]>;
    drawed: Move[];
    users: Map<string, string>;
  };

  interface User {
    name: string;
    color: string;
  }

  interface ClientRoom {
    id: string;
    usersMoves: Map<string, Move[]>;
    movesWithoutUser: Move[];
    myMoves: Move[];
    users: Map<string, User>;
  }

  interface ServerToClientEvents {
    your_move: (move: Move) => void;
    new_msg: (userId: string, msg: string) => void;
    room_exists: (exists: boolean) => void;
    room: (room: Room, usersMovesToParse: string, usersToParse: string) => void;
    created: (roomId: string) => void;
    joined: (roomId: string, failed?: boolean) => void;
    user_draw: (move: Move, userId: string) => void;
    user_undo(userId: string): void;
    mouse_moved: (x: number, y: number, userId: string) => void;
    new_user: (user_Id: string, username: string) => void;
    user_disconnected: (userId: string) => void;
  }

  interface ClientToServerEvents {
    check_room: (roomId: string) => void;
    draw: (moves: Move) => void;
    mouse_move: (x: number, y: number) => void;
    undo: () => void;
    create_room: (username: string) => void;
    join_room: (room: string, username: string) => void;
    joined_room: () => void;
    leave_room: () => void;
    send_msg: (msg: string) => void;
  }
}
