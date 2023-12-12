export type DateRangeComponentMap<T> = Record<
  string,
  React.FunctionComponent<{
    onDateRangeChange: (periodRange: T) => void
  }>
>
