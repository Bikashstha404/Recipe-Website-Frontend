import { Button } from './components/ui/button';

function App() {
  return (
    <>
     <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>

    <>
     <Button>Secondary</Button> <br /><br />
     <Button variant="destructive">Here</Button> <br /><br />
     <Button variant="secondary">Secondary</Button> <br /><br />
     <Button variant="ghost">Secondary</Button> <br /><br />
   </>
    </>
  )
}

export default App
