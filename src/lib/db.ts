import { DataSource } from "typeorm";
import { AppDataSource } from "./typeorm";

let dataSource: DataSource | null = null;

export async function db() {
  if (dataSource && dataSource.isInitialized) return dataSource;

  dataSource = await AppDataSource.initialize();

  return dataSource;
}
