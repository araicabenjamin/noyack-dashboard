import "./WealthProfile.css";

import { ProfileCompletionCard } from "../../components/wealthprofile/ProfileCompletionCard";
import { WealthIQCard } from "../../components/wealthprofile/WealthIQCard";
import { ProfileInsightsCard } from "../../components/wealthprofile/ProfileInsightsCard";
import { BasicInfoCard } from "../../components/wealthprofile/BasicInfoCard";
import { WealthProfileTabs } from "../../components/wealthprofile/WealthProfileTabs";

export const WealthProfile = () => {
  return (
    <div className="wealth-profile-page">
      <div className="wealth-profile-header">
        <h1 className="page-semibold">Wealth Profile</h1>

        <p className="helper-regular">
          Complete your financial profile to improve your Wealth IQ score
           <br />and
          unlock personalized insights.
         
        </p>
      </div>

      <div className="wealth-profile-hero">
        <ProfileCompletionCard />
        <WealthIQCard />
        <ProfileInsightsCard />
      </div>

      <WealthProfileTabs />

      <BasicInfoCard />
    </div>
  );
};
