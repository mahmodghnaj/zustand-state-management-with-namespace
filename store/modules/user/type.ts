export interface IUser {
  name: string | null;
  email: string | null;
  setName: (name: string) => void;
  setEmail: (email: string) => void;
}
