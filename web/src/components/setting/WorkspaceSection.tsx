import { Checkbox } from "@mui/joy";
import { useEffect, useState } from "react";
import { getSystemStatus, upsertWorkspaceSetting } from "../../helpers/api";

const WorkspaceSection: React.FC = () => {
  const [disallowSignUp, setDisallowSignUp] = useState<boolean>(false);

  useEffect(() => {
    getSystemStatus().then(({ data }) => {
      setDisallowSignUp(data.disallowSignUp);
    });
  }, []);

  const handleDisallowSignUpChange = async (value: boolean) => {
    await upsertWorkspaceSetting("disallow-signup", JSON.stringify(value));
    setDisallowSignUp(value);
  };

  return (
    <>
      <div className="mx-auto max-w-4xl w-full px-3 py-6 flex flex-col justify-start items-start space-y-4">
        <p className="text-gray-400">Workspace settings</p>
        <div className="w-full flex flex-col justify-start items-start">
          <Checkbox
            className="font-medium"
            label="Disable self-service signup"
            checked={disallowSignUp}
            onChange={(event) => handleDisallowSignUpChange(event.target.checked)}
          />
          <p className="mt-2 text-gray-500">Once disabled, other users cannot signup.</p>
        </div>
      </div>
    </>
  );
};

export default WorkspaceSection;
