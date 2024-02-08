import Menu  from "./menu.js"
import Left  from "./left.js"
import Right from "./right.js"
import Dots  from "./dots.js"
import Time  from "./time.js"
import File  from "./file.js"

const Nav =()=> {
  return (
    <div class="flex px-2">
    <div class="flex px-1"> <Left/></div>
    <div class="flex px-1"> <Right/></div>
    </div>
  )
}

export default function Header() {
  return (
    <header class="bg-white border-b">
      <div class="mx-auto px-4 py-2 flex items-center">
        <Menu/>
        <Nav/>
        <p class="pr-2 hidden md:flex">Title</p>
        <div class="border-l pl-2"><File/></div>
        <p class="px-2  mr-auto">Section</p>
    <div class="px-2"><Time/></div>
    <div class="px-2"><Dots/></div>
      </div>
    </header>
  )
}
