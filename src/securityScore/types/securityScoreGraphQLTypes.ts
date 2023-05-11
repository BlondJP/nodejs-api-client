export type FilterType = {
  name?: string;
  values?: [FilterValuesType];
};

export type FilterValuesType = {
  value?: string;
  count?: number;
};

export type RegistrationType = {
  accountReference?: string;
  subscriptionReference?: string;
  customerReference?: string;
  resellerReference?: string;
  vendorCode?: string;
  marketplace?: string;
};
export type CheckType = {
  name?: string;
  description?: string;
  processed?: number;
  isFailed?: boolean;
  flagged?: number;
  reference?: string;
  score?: number;
  severity?: string;
};
export type StandardType = {
  name?: string;
  checks?: [CheckType];
  failed?: number;
  passed?: number;
  score?: number;
  total?: number;
};

export type AccountType = {
  reference?: string;
  name?: string;
  standards?: [StandardType];
  failed?: number;
  passed?: number;
  score?: number;
  total?: number;
};

export type ScoreResultType = {
  account?: AccountType;
  registration?: RegistrationType;
};

export type NameCountByDateType = {
  count?: number;
  date?: string;
};

export type NameAggType = {
  name?: string;
  data?: [NameCountByDateType];
  progression?: number;
};

export type SeveritiesAggType = {
  severities: [NameAggType];
};

export type IssuesAggType = {
  issues: [NameAggType];
};

export type CompareEndCustomerAggType = {
  date?: string;
  accounts?: number;
  avgCurrentScore?: number;
  failed?: number;
  passed?: number;
  subscriptionReferences?: number;
};

export type EndCustomerAggType = {
  customerRef?: string;
  data?: [CompareEndCustomerAggType];
  progression?: number;
};

export type EndCustomersAggType = {
  customers: [EndCustomerAggType];
};

export type ScoreByMonthType = {
  date?: string;
  avgCurrentScore?: number;
};

export type PeriodsType = {
  from?: string;
  to?: string;
};

export type MonthlyTrendAggType = {
  period?: PeriodsType;
  avgCurrentScore?: number;
  scores?: [ScoreByMonthType];
};

export type GetPartnerDataType = {
  filters?: [FilterType];
  results?: [ScoreResultType];
  avgCurrentScore?: number;
  monthlyTrendAgg?: MonthlyTrendAggType;
  endCustomersAgg?: EndCustomersAggType;
  issueAgg?: IssuesAggType;
  severityAgg?: SeveritiesAggType;
  period?: PeriodsType;
};

export type CompareAccountAggType = {
  date?: string;
  avgCurrentScore?: number;
  failed?: number;
  passed?: number;
};

export type AccountAggType = {
  accountRef?: string;
  data?: [CompareAccountAggType];
  progression?: number;
};

export type AccountsAggType = {
  accounts: [AccountAggType];
};

export type GetCustomerDataType = {
  filters?: [FilterType];
  avgCurrentScore?: number;
  accountsAgg?: AccountsAggType;
  severityAgg?: SeveritiesAggType;
  period?: PeriodsType;
  subscriptionReferences?: number;
};

export type CompareStandardAggType = {
  date?: string;
  score?: number;
  failed?: number;
  passed?: number;
};

export type StandardAggType = {
  name?: string;
  data?: [CompareStandardAggType];
  progression?: number;
};

export type StandardsAggType = {
  standards: StandardAggType;
};

export type GetCustomerAccountDataType = {
  filters?: [FilterType];
  avgCurrentScore?: number;
  standardsAgg?: StandardsAggType;
  severityAgg?: SeveritiesAggType;
  period?: PeriodsType;
};
