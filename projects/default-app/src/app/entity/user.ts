/**
 * @author abdel-maliki
 * Date : 26/01/2021
 */


export class User {
  name: string;
  id: string | number;

  constructor(name?: string, id?: string | number) {
    this.id = id;
    this.name = name;
  }
}
