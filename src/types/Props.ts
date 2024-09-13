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
  onClick?: (valueButtons: string, targetName: string) => void
}

export interface UsersProps {
  users: User[];
}

export interface LabelProps {
  className: string;
  content: string;
  htmlFor: string;
}

export interface Search extends Omit<User, 'id'> {
  id: string;
  currentlyChangedField: string;
}

export interface FilteredProps {
  onFilterChange: (field: keyof User, value: string) => void;
}
