import { useState } from "react";

export function TwitterFollowCard({ children, userName, initialIsFollwing }) {
  const [isFollowing, setIsFollowing] = useState(initialIsFollwing);
  const text = isFollowing ? "Siguiendo" : "Seguir";
  const buttonClassName = isFollowing
    ? "tw-followCard-button is-following"
    : "tw-followCard-button";
  const imageSrc = `https://unavatar.io/${userName}`;
  const handleClick = () => {
    setIsFollowing(!isFollowing);
  };

  return (
    <article className="tw-followCard">
      <header className="tw-followCard-header">
        <img
          className="tw-followCard-avatar"
          alt="El Avatar de Kiko Beats"
          src={imageSrc}
        />
        <div className="tw-followCard-info">
          {children}
          <span className="tw-followCard-infoUserName">@{userName}</span>
        </div>
      </header>
      <aside>
        <button onClick={handleClick} className={buttonClassName}>
          <span className="tw-followCard-text">{text}</span>
          <span className="tw-followCard-stopFollow">Dejar de Seguir</span>
        </button>
      </aside>
    </article>
  );
}
