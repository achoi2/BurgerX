import React from 'react'

export default () => {
  return <footer className="p-3 text-center text-white bg-secondary">
          <div>
              <h4>Copyright &copy; BurgerX</h4>
              {new Date().getFullYear()}
          </div>
      </footer>;
}


