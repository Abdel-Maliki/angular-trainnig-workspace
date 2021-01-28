/**
 * @author abdel-maliki
 * Date : 28/01/2021
 */

export interface IProduct {
  designation?: string;
  price?: number;
  getPrice: () => number;
}
