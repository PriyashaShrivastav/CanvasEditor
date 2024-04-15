import React, { useRef, useEffect } from 'react';


const Canvas = ({ templateData, backgroundColor, caption, cta }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    // Clear the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw the background color
    ctx.fillStyle = backgroundColor;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Draw the design pattern
    const designPatternImg = new Image();
    designPatternImg.src = templateData.urls.design_pattern;
    designPatternImg.onload = () => {
      ctx.drawImage(designPatternImg, 0, 0, canvas.width, canvas.height);

      // Draw the mask
      const maskImg = new Image();
      maskImg.src = templateData.urls.mask;
      maskImg.onload = () => {
        ctx.globalCompositeOperation = 'destination-in';
        ctx.drawImage(maskImg, templateData.image_mask.x, templateData.image_mask.y, templateData.image_mask.width, templateData.image_mask.height);
        ctx.globalCompositeOperation = 'source-over';

        // Draw the mask stroke
        const maskStrokeImg = new Image();
        maskStrokeImg.src = templateData.urls.stroke;
        maskStrokeImg.onload = () => {
          ctx.drawImage(maskStrokeImg, templateData.image_mask.x, templateData.image_mask.y, templateData.image_mask.width, templateData.image_mask.height);

          // Draw the caption
          ctx.font = `${templateData.caption.font_size}px Arial`;
          ctx.fillStyle = templateData.caption.text_color;
          ctx.textAlign = templateData.caption.alignment;
          const words = caption.split(' ');
          let line = '';
          let y = templateData.caption.position.y;
          for (let i = 0; i < words.length; i++) {
            const testLine = line + words[i] + ' ';
            const metrics = ctx.measureText(testLine);
            if (metrics.width > templateData.caption.max_characters_per_line * templateData.caption.font_size / 2) {
              ctx.fillText(line.trim(), templateData.caption.position.x, y);
              line = words[i] + ' ';
              y += templateData.caption.font_size;
            } else {
              line = testLine;
            }
          }
          ctx.fillText(line.trim(), templateData.caption.position.x, y);

          // Draw the CTA
          ctx.font = `${templateData.cta.font_size || 30}px Arial`;
          ctx.fillStyle = templateData.cta.text_color;
          const ctaWidth = ctx.measureText(cta).width;
          const ctaHeight = templateData.cta.font_size;
          const ctaX = templateData.cta.position.x - ctaWidth / 2;
          const ctaY = templateData.cta.position.y - ctaHeight / 2;
          ctx.fillRect(ctaX - 12, ctaY - 12, ctaWidth + 24, ctaHeight + 24, templateData.cta.background_color);
          ctx.fillText(cta, templateData.cta.position.x, templateData.cta.position.y);
        };
      };
    };
  }, [templateData, backgroundColor, caption, cta]);

  return (
    <canvas
    ref={canvasRef}
    width={1080}
    height={1080}
    className="w-full max-w-screen-(2xl) text-black h-auto border border-gray-300 rounded-md"
  />
  );
};

export default Canvas;

