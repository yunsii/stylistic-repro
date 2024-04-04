// @ts-nocheck
'use client'

const FastTextWasmJs: React.FC = () => {
  return (
    <Alert 
      message={
        condition
          ? (
            <div>
              foo
            </div>
            )
          : (
            <div>bar</div>
            )
        }
      type={
        identified
          ? 'success'
          : 'info'
      }
      />
  )
}

export default FastTextWasmJs
