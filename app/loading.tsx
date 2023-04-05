function Loading() {
  return (
    <main className="flex h-full w-full items-center justify-center py-12 ">
      <div className="dot-spinner inset-0 ">
        <div className="dot-spinner__dot"></div>
        <div className="dot-spinner__dot"></div>
        <div className="dot-spinner__dot"></div>
        <div className="dot-spinner__dot"></div>
        <div className="dot-spinner__dot"></div>
        <div className="dot-spinner__dot"></div>
        <div className="dot-spinner__dot"></div>
        <div className="dot-spinner__dot"></div>
      </div>
    </main>
  );
}

export default Loading;

// export function LoadingSkeleton() {
//   return <></>;
// }
