import { Box } from "@material-ui/core";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAllEmails } from "../../app/slices/EmailListSlice";
import EmailListCategories from "./EmailListCategories/EmailListCategories";
import EmailListSettings from "./EmailListSettings/EmailListSettings";
import EmailRow from "./EmailRow/EmailRow";

const EmailList: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllEmails("inbox"));
  }, [dispatch]);

  return (
    <Box>
      <EmailListSettings />
      <EmailListCategories />

      <EmailRow
        id="firebase6"
        from="Cips"
        title="Twitch"
        subject="Hey fellow streamer!!"
        description="Lo?rem ipsum dolor sit amet, consectetur adipisicing elit. Cum quam laborum rem nam magnam excepturi, saepe temporibus dolor? Soluta porro dolorem earum. At, aspernatur beatae excepturi cum voluptate repudiandae molestiae"
        time="10pm"
      />
      <EmailRow
        id="firebase7"
        from="Cips"
        title="Google"
        subject="Hey there!"
        description="Forgot a 🎁? Give a year of unforgettable ideas"
        time="10pm"
      />
    </Box>
  );
};

export default EmailList;
