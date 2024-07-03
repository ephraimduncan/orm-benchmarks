import { extractDatabase } from "./lib/utils";
import runBenchmarksPg from "./run-benchmarks-pg";
import runBenchmarksMySQL from "./run-benchmarks-mysql";

const databaseUrl = process.env.DATABASE_URL || "postgresql://nikolasburk:nikolasburk@localhost:5432/benchmark";
const iterations = Number(process.env.ITERATIONS) || 1;

async function main() {
  const database = extractDatabase(databaseUrl);

  if (database === "PostgreSQL") {
    console.log(`Running benchmarks on ${databaseUrl}.`);
    await runBenchmarksPg({ databaseUrl, iterations });
  }
  else if (database === "MySQL") {
    console.log(`Running benchmarks on ${databaseUrl}.`);
    // await runBenchmarksPg({ databaseUrl, iterations });
  } else {
    console.log(`${database} is not yet available.`);
  }
}

main();
