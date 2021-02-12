import Menu from '../src/components/commns/Menu';
import Footer from '../src/components/commns/Footer';


export default function Home() {
  
  return (
    <div style={{
      flex: '1',
      display: 'flex',
      flexWrap: 'wrap',
      flexDirection: 'column',
      justifyContent: 'space-between',
    }}>
      <Menu />
      <Footer />
    </div>
  )
}
