/**
 * Class SubscriptionsClient
 */
import { AbstractClient, Parameters } from '../abstractClient';
import { Subscription, SubscriptionData } from './entities/subscription';
import { SubscriptionsListResult } from './entities/subscriptionsListResult';
import { GetResult } from '../getResult';
import { DataInvitation } from '../customers';

export type SubscriptionsListPayload = {
  subscription?: string[];
  status?: string[];
  partnerTag?: string[];
  marketplace?: string[];
  company?: string[];
  startDate?: string;
  endingDate?: string;
  lastUpdate?: string;
  perPage?: string;
  page?: string;
  sortBy?: string;
  sortDirection?: 'ASC' | 'DESC';
};

export type SubscriptionsListData = {
  data: Array<SubscriptionData>;
  pagination: {
    perPage: number;
    currentPage: number;
    totalPage: number;
    total: number;
    next: string;
    previous: string;
  };
};

export class SubscriptionsClient extends AbstractClient {
  /**
   * The base path of the API
   */
  protected basePath = '/subscriptions';

  /**
   * The path of the List endpoint
   */
  private LIST_PATH = '';

  /**
   * Pagination for these endpoints are camel cased (`&perPage=x` instead of `&per_page=x`)
   */
  protected isCamelPagination = true;

  /**
   * Calls the subscriptions API list endpoint
   *
   * @param data - List payload
   *
   * @returns Promise\<AxiosResponse\<{@link SubscriptionsListData}\>\>   */
  public async listRaw(
    data: SubscriptionsListPayload = {},
  ): Promise<SubscriptionsListData> {
    this.path = this.LIST_PATH;
    return this.get<SubscriptionsListData>(data, {}, { isAdmin: true });
  }

  /**
   * Lists subscriptions and returns a SubscriptionsListResult to manipulate the results.
   *
   * Note: This endpoint requires an admin token to be called
   *
   * @param postData - List payload
   * @param perPage - Number of results per page
   * @param page - Page number to fetch
   *
   * @returns Promise\<{@link SubscriptionsListResult}\>
   *
   */
  public async list(
    postData: SubscriptionsListPayload = {},
    perPage = 100,
    page = 1,
  ): Promise<SubscriptionsListResult> {
    this.setPerPage(perPage);
    this.setPage(page);

    const response = await this.listRaw(postData);

    return new SubscriptionsListResult(response, this, postData);
  }

  /**
   * Return a subscription finding it by its reference.
   *
   * Note: This endpoint requires an admin token to be called
   *
   */
  public async getOneByReference(
    licenseRef: string,
    parameters: Parameters,
  ): Promise<GetResult<Subscription>> {
    this.path = `/licenses/${licenseRef}`;
    const res = await this.get(parameters, {}, { isAdmin: true });

    return new GetResult(Subscription, res);
  }
}
