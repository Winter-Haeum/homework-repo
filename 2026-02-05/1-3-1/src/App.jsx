import ProfileCard from "./components/ProfileCard";
import dianaImg from "./assets/diana.webp";
import eclipseImg from "./assets/eclipse.webp";

function App() {
    return (
        <div>
            <div className="cardRow">
                <ProfileCard 
                    theme="themeLight"
                    imageSrc={dianaImg}
                    englishName="User Name"
                    koreanName="다이애나 핑"
                    desc={`이클리스 핑의 언니.
                    공주 협회 회장으로 달빛처럼 고요하고
                    단정한 분위기가 매력이다.`}                
                />

                <ProfileCard 
                    theme="themeDark"
                    imageSrc={eclipseImg}
                    englishName="User Name"
                    koreanName="이클립스 핑"
                    desc={`다이애나 핑의 여동생.
                    언니가 공주 협회가 되어 질투심에 메인 빌런이 되었으며
                    강력한 어둠의 마법 에너지를 지니고 있다.`}                
                />
            </div>
        </div>
    );
}

export default App;
