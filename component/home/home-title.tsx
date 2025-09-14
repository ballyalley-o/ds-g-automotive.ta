
const HomeTitle = ({ title }: { title : string }) => {
  return (
    <div className={'flex justify-center w-full'}>
      <h1 className={'text-4xl font-bold'}>{title}</h1>
    </div>
  )
}

export default HomeTitle