import { HeaderBox } from "@/components/HeaderBox";
import { TotalBalanceBox } from "@/components/TotalBalanceBox";

function Home() {
    const loggedIn = { firstName: "Adrian" };

    return (
        <section className="home">
            <div className="home-content">
                <header className="home-header">
                    <HeaderBox
                        type="greeting"
                        title="Welcome"
                        user={loggedIn.firstName || "Guest"}
                        subText="Acces and manage your account and transactions effiently."
                    />
                </header>
                <TotalBalanceBox
                    accounts={[]}
                    totalBanks={1}
                    totalCurrentBalance={1250.5}
                />
            </div>
        </section>
    );
}

export default Home;
