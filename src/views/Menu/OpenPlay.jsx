// imported components:
import { useView } from '@root/contexts/ViewContext.jsx';
import { usePlayer } from '@root/contexts/PlayerContext';
import RedirectButton from '@root/components/RedirectButton/RedirectButton.jsx';

export default function OpenPlay({ setOpenPlay }) {
  const { setView } = useView();
  const { initializeUser } = usePlayer();

  return (
    <div id="openPlay" className="flex-col align-center">
      <h2 className="center-text">Open Play</h2>
      <hr />
      <p>
        Open Play allows the user to play The Elijah Project without having to
        create a player account.
        <br />
        <br />
        This disables profile customization and level remembrance. Each time you
        exit The Elijah Project, your progress for each planet will be reset.
        <br />
        <br />
        <em>Note: creating a profile is completely free ($).</em>
      </p>
      <div>
        <RedirectButton onclick={() => setOpenPlay(false)} text={'Go Back'} />
        <RedirectButton
          onclick={() => {
            initializeUser('openPlay');
            setOpenPlay(false);
            setView('Dashboard');
          }}
          text={'Continue'}
        />
      </div>
    </div>
  );
}
