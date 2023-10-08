import { memo } from "react";

const Header = memo(function Header({ onUpdate }: { onUpdate: () => void }) {
  return (
    <div className="header">
      <h2 className="header-title">Notes</h2>
      <button type="button" className="btn btn-update" onClick={onUpdate} />
    </div>
  );
});

export default Header;
