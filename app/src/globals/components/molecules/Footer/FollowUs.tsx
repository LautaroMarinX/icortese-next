import SocialMedia from "./SocialMedia";

const FollowUs = () => {
  return (
    <div className="flex flex-col">
      <h3 className="text-xl mb-2 flex items-center">Seguinos en</h3>
      <div className="flex row gap-2 mb-4">
        <SocialMedia />
      </div>
    </div>
  );
}

export default FollowUs