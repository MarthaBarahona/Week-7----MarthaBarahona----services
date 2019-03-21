export interface UserData {
    avatar_url: string;
    name: string;
    following: number;
    company: string | null;
    blog: string | null;
    location: string;
    created_at: string;
    html_url: string;
    repositories: [{}];
    followers_url: string;
    number_repositories: number;
    followers: [{}];
}
