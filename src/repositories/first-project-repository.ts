export abstract class FirstProjectRepository {
    abstract create(name: string, memberFunction: String): Promise<void>;
}