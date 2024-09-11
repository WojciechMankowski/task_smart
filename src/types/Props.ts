import User from "./User";
export interface ButtonProps {
  className: string;
  onClick: () => void;
  content: string;
}

export interface InputProps {
  type: string;
  className: string;
  name: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyUp?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
}

export interface UsersProps {
  users: User[];
}

export interface LabelProps {
  className: string;
  content: string;
  htmlFor: string;
}
export interface Search {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  currentlyChangedField: string;
}
export interface FilteredProps {
  onFilterChange: (field: keyof User | string, value: string) => void;
}
