export interface User {
  Username?: string;
  Password?: string;
}

export interface CreateUserParams extends User {
  ReferrerCode?: string;
}
