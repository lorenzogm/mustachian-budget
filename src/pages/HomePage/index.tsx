import React from 'react'
import { Link } from 'react-router-dom'

const HomePage: React.FC = () => (
  <>
    <div>
      <Link to="/signup">Sign Up</Link>
    </div>
    <div>
      <Link to="/login">Login</Link>
    </div>
  </>
)

export default HomePage
