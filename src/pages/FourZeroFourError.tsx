import { IonContent, IonIcon, IonPage } from "@ionic/react";
import { chevronForwardOutline } from 'ionicons/icons';
import "./FourZeroFourError.scss";
import Header from "../components/Header";

const Home: React.FC = () => {
  return (
    <IonPage>
      <Header />
      <IonContent fullscreen>
        <section className="page_404">
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <div className="col-sm-12 col-sm-offset-1  text-center">
                  <div className="four_zero_four_bg">
                    <h1 className="text-center">404</h1>
                  </div>

                  <div className="content_box_404">
                    <h3 className="h2">Look like you're lost</h3>

                    <p>the page you are looking for not avaible!</p>

                    <a href="/" className="link_404">
                      Go to Home <IonIcon icon={chevronForwardOutline} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </IonContent>
    </IonPage>
  );
};

export default Home;
