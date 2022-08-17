import { BuildExecutorSchema } from './schema';

export default async function runExecutor(options: BuildExecutorSchema) {
  console.log('Executor ran for Buildv 222', options);
  return {
    success: true,
  };
}
``