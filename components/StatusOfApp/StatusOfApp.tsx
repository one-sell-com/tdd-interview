import * as React from 'react';

const statusCheckUrl =
  "https://raw.githubusercontent.com/one-sell-com/tdd-interview-server/main/db.json";

interface StatusResponse {
  ok: boolean;
}

export const StatusOfApp: React.FC = () => {
  const [status, setStatus] = React.useState<StatusResponse | null>(null);
  React.useEffect(() => {
    fetch(statusCheckUrl)
      .then((res) => res.json())
      .then((data: any) => {
        setStatus(data);
      })
      .catch(console.error);
  }, []);
  return (
    <h2 className="border-2 border-red-400 rounded-lg p-4">
      TDD app status: {status ? (status.ok ? "OK" : "Not OK") : "Unknown"}
    </h2>
  );
};
