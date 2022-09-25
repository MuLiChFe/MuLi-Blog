
/**
 * 空白博客 列表
 * @returns {JSX.Element}
 * @constructor
 */
const BlogListEmpty = ({ currentSearch }) => {
  return <div className='flex items-center justify-center min-h-screen mx-auto md:-mt-20'>
        <p className='text-gray-500 dark:text-gray-300'>没有找到相关内容欸，换个关键词再试试吧~ {(currentSearch && <div>{currentSearch}</div>)}</p>
  </div>
}
export default BlogListEmpty
