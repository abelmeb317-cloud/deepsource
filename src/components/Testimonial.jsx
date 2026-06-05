const Testimonial = () => {
  return (
    <section className="max-w-6xl mx-auto my-24 px-6">
      <div className="relative bg-gradient-to-br from-emerald-600 to-green-700 text-white rounded-2xl p-12 md:p-16 shadow-xl overflow-hidden">
        {/* background glow */}
        <div className="absolute w-72 h-72 bg-white/10 rounded-full blur-3xl top-[-50px] left-[-50px]" />
        <div className="absolute w-72 h-72 bg-black/10 rounded-full blur-3xl bottom-[-50px] right-[-50px]" />

        {/* quote */}
        <p className="text-xl md:text-2xl leading-relaxed font-medium relative z-10">
          “With DeepSource's pull request workflow, everything is integrated
          right at the point of merge. It makes code review seamless and
          secure.”
        </p>

        {/* author */}
        <div className="mt-8 relative z-10">
          <h4 className="font-semibold text-lg">Reed Wilson</h4>
          <p className="text-green-100 text-sm">Engineering Manager</p>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
