import React from 'react'

const layout = async ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {

  return (

    <div className="relative w-full h-full flex flex-col justify-start items-center gap-20 overflow-x-hidden">
      {children}
    </div>
  );
}

export default layout