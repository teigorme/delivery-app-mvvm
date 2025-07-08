import { useHomeModel } from '@/ViewModels/Home/home.model';
import HomeView from '@/ViewModels/Home/home.view';

export default function App() {
  const props = useHomeModel()
  return (
    <HomeView {...props} />
  );
}


