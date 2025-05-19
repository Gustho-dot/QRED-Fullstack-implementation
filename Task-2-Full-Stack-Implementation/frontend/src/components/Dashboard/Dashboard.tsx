import { useGetCompaniesQuery } from "../../graphql/generated/graphql";

const Dashboard = () => {
  const { data, loading, error } = useGetCompaniesQuery();

  if (loading) {
    return <p>Loading...</p>;
  } 
  
  // TODO: better error handling
  if (error || !data?.companies?.length) {
    return <p>Error loading companies</p>;
  } 

  // TODO: Query selected company and use selected company to show.
  const company = data.companies[0];

  return (
    <div className="p-4 max-w-md mx-auto">
      <div className="text-xl font-semibold">{company.name}</div>

       {/* TODO: Do not map this but use Active card state depending on user interaction */}
       {/* IE: query selected card and show data for it */}
      {company.cards?.map((card) => (
         <div key={card.id} className="space-y-4">
          <div className="bg-white p-4 rounded shadow mt-4">
            <div className="text-sm text-gray-600">Remaining spend</div>
            <div className="text-lg">{card.remainingSpend} / {card.limit} kr</div>
            <div className="text-xs text-gray-400">Based on your set limit</div>
          </div>

          <div key={card.id} className="bg-white p-4 rounded shadow mt-4">
            <div className="mt-4">
              <div className="font-semibold mb-2">Latest transactions</div>
              {/* TODO: Create disclosure component/load component */}
              {(card.transactions || []).slice(0, 3).map((transaction) => (
                <div key={transaction.id} className="flex justify-between text-sm">
                  <div>{transaction.description}</div>
                  <div>{transaction.amount} kr</div>
                </div>
              ))}
            </div>
          </div>
          <div key={card.id} className="bg-white p-4 rounded shadow mt-4">
            <div className="flex flex-col gap-2 text-sm"> 
                  {/* TODO: Create mutation and make the button actually do something */}
                  <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                    {card.active ? 'Deactivete card' : 'Activate card'}
                  </button>
                  {/* TODO: Create mutation and make the button actually do something */}
                  <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                    Contact support!
                  </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Dashboard;