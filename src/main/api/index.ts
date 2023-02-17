import '../config/module-alias';
import { HelloWorld } from '@/application/controllers/hello-world';

function main(): void {
  new HelloWorld().exec();
}
main();
