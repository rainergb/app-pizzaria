declare namespace Express{
    export interface Request{
        user_id: string;
    }
    
    export interface Request {
        file?: Express.Multer.File;
      }
}