import React from 'react'
import "./header.css"



export default function Header() {
  const A=[];
  A[0]="https://images.unsplash.com/photo-1613419380964-ad761bb26611?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80";
  A[1]="https://images.unsplash.com/photo-1500534623283-312aade485b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80";
  A[2]="https://images.unsplash.com/photo-1599270613570-a620f2e59f75?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80";
  A[3]="https://images.unsplash.com/photo-1532891111173-366d1cf038a7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80";
  A[4]="https://images.unsplash.com/photo-1623181392923-b8f82b72dd93?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80";
  A[5]="https://images.unsplash.com/photo-1508012340316-cdf9d309cea0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1332&q=80";
  A[6]="https://images.unsplash.com/photo-1564584171331-c92bbc51d37a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80";
  A[7]="https://images.unsplash.com/photo-1571783480255-3ac44aefc6e4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80";
  A[8]="https://images.unsplash.com/photo-1533263947757-5e2a07afe5fe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1325&q=80";
  A[9]="https://images.unsplash.com/photo-1554259702-2e408eab6afe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80";
  const s=Math.floor(Math.random()*10);
  return (
    <div className="Header">
      <div className="HeaderTitles">
        <span className="HeaderTitle-sm">Hey</span>
        <span className="HeaderTitle-Lg">Blog</span>
      </div>
      <img className="HeaderImage" src={A[s]} alt="image"></img>
    </div>
  )
}
