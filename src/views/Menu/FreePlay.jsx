// imported components:
import { useView } from '@root/contexts/ViewContext.jsx';
import RedirectButton from '@root/components/RedirectButton/RedirectButton.jsx';

export default function FreePlay({ setFreePlay }) {
  const { setView } = useView();

  const goToDash = () => {
    setFreePlay(false);
    setView('Dashboard');
  };

  const goBack = () => {
    setFreePlay(false);
  };

  return (
    <>
      <p id="freePlay">
        Free Play allows the user to play The Elijah Project without having to
        create a user profile.
        <br />
        <br />
        This disables profile customization and level remembrance. Each time you
        exit The Elijah Project, your progress for each planet will be reset.
      </p>
      <div>
        <RedirectButton onclick={goToDash} text={'Continue'} />
        <RedirectButton onclick={goBack} text={'Go Back'} />
      </div>
    </>
  );
}
