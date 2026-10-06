// Account types

export type Account = {
  id: string;

  name: string;
  username: string | null;
  email: string;
  password: string;

  profileImage: ProfileImage | null;

  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date | null;
};

export type ProfileImage = {
  id: string;
  accountId: string;
  url: string;
};
