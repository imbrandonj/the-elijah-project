// imported components:
import { useView } from '@root/contexts/ViewContext.jsx';
import RedirectButton from '@root/components/RedirectButton/RedirectButton.jsx';

export default function OpenPlay({ setOpenPlay }) {
  const { setView } = useView();

  return (
    <div id="openPlay" className="flex-col align-center">
      <p>
        Open Play allows the user to play The Elijah Project without having to
        create a player profile.
      </p>
      <p>
        This disables profile customization and level remembrance. Each time you
        exit The Elijah Project, your progress for each planet will be reset.
      </p>
      <p>
        <em>Note: creating a profile is completely free ($).</em>
      </p>
      <div>
        <RedirectButton onclick={() => setOpenPlay(false)} text={'Go Back'} />
        <RedirectButton
          onclick={() => {
            setOpenPlay(false);
            setView('Dashboard');
          }}
          text={'Continue'}
        />
      </div>
    </div>
  );
}
