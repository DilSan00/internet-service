import { useGetApplicationsQuery } from "../api";
import s from "./Applications.module.scss";
import { Skeleton } from "../../../components/ui/skeleton-components";

export function Applications() {
  const { data, isLoading } = useGetApplicationsQuery();

  return (
    <div className={s.applications}>
      {isLoading ? (
        <div className={s.tableSkeletons}>
          {Array.from({ length: 10 }).map((_, index) => (
            <Skeleton key={index} width={100} height={40} />
          ))}
        </div>
      ) : (
        <table className={s.table}>
          <thead>
            <tr>
              <th className={s.headTH}>ФИО</th>
              <th className={s.headTH}>Номер тел.</th>
              <th className={s.headTH}>Провайдер</th>
              <th className={s.headTH}>Цена</th>
            </tr>
          </thead>

          <tbody>
            {data?.map((app) => (
              <tr key={app._id}>
                <th>{app.fullName}</th>
                <th>{app.phone}</th>
                <th>
                  {app.providerName} - {app.type}
                </th>
                <th>{app.price} сом</th>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
